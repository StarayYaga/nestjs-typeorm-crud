import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "users"})
class UserEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string

}

export default UserEntity