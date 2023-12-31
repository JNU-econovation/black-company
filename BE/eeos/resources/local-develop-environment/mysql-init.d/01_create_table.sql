use eeos;

CREATE TABLE program
(
    program_id       bigint       not null auto_increment,
    created_date     datetime     not null,
    is_deleted       boolean      not null,
    updated_date     datetime     not null,
    program_content  TEXT         not null,
    program_date     TIMESTAMP    not null,
    program_title    varchar(255) not null,
    program_category varchar(255) NOT NULL,
    program_type     varchar(255) NOT NULL,
    program_writer   BIGINT       NOT NULL,
    primary key (program_id)
) engine = InnoDB;

CREATE TABLE member
(
    member_id               bigint       not null auto_increment,
    created_date            datetime     not null,
    is_deleted              boolean      not null,
    updated_date            datetime     not null,
    member_name             varchar(255) not null,
    member_generation       BIGINT       not null,
    member_oath_server_type varchar(255) NOT NULL,
    member_active_status    varchar(255) NOT NULL,
    primary key (member_id),
    INDEX idx_name (member_name),
    INDEX idx_active_status (member_active_status)
) engine = InnoDB;

CREATE TABLE attend
(
    attend_id         bigint      not null auto_increment,
    created_date      datetime    not null,
    is_deleted        boolean     not null,
    updated_date      datetime    not null,
    attend_program_id BIGINT      not null,
    attend_member_id  BIGINT      not null,
    attend_status     VARCHAR(40) not null,
    primary key (attend_id)
) engine = InnoDB;

ALTER TABLE member
    ADD INDEX idx_name (member_name);

ALTER TABLE attend
    ADD INDEX idx_program (attend_program_id)

ALTER TABLE program
    ADD COLUMN program_category varchar(255) NOT NULL,
    ADD COLUMN program_type     varchar(255) NOT NULL,
    ADD COLUMN program_writer   BIGINT       NOT NULL;

ALTER TABLE member
    ADD COLUMN member_oath_server_type varchar(255) NOT NULL,
    ADD COLUMN member_active_status    varchar(255) NOT NULL,
    ADD INDEX idx_name (member_name),
    ADD INDEX idx_active_status (member_active_status);

ALTER TABLE member
    DROP COLUMN member_generation;

create table auth_info
(
    auth_info_id        bigint       not null auto_increment,
    created_date        datetime(6)  not null,
    is_deleted          bit          not null,
    updated_date        datetime(6)  not null,
    auth_info_member_id bigint       not null,
    auth_info_token     varchar(255) not null,
    primary key (auth_info_id)
) engine = InnoDB;

create table oauth_info
(
    oauth_info_id        bigint       not null auto_increment,
    created_date         datetime(6)  not null,
    is_deleted           bit          not null,
    updated_date         datetime(6)  not null,
    oauth_info_member_id bigint       not null,
    oauth_info_oauth_id  varchar(255) not null,
    primary key (oauth_info_id)
) engine = InnoDB;