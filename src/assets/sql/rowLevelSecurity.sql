-- boards row level security
alter table boards enable row level security;

-- Policies
create policy "Users can create boards" on boards for insert to authenticated with CHECK (true);

create policy "Users can view their boards" on boards for 
    select using (
        id in (
            select get_boards_for_authenticated_user()
        )
    );

create policy "Users can update their boards" on boards for 
    update using (
        id in (
            select get_boards_for_authenticated_user()
        )
    );

create policy "Users can delete their created boards" on boards for
    delete using (auth.uid() = creator);


-- user_boards row level security
alter table user_boards enable row level security;

create policy "Users can add their boards" on user_boards for 
    insert to authenticated with check (true);

create policy "Users can view boards" on user_boards for 
    select using (auth.uid() = user_id);

create policy "Users can delete their boards" on user_boards for
    delete using (auth.uid() = user_id);

-- lists row level security
alter table lists enable row level security;

-- Policies

create policy "Users can edit lists if they are part of the board" on lists for
    all using ( 
        board_id in (
            select get_boards_for_authenticated_user()
        )
    );

-- cards row level security
alter table cards enable row level security;

create policy "Users can edit cards if they are part of the board" on cards for 
    all using (
        board_id in (
            select get_boards_for_authenticated_user()
        )
    );