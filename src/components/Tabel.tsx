import { UserType } from "../types/UserType";
import {
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
} from "./styled/tabel.styled";

export const Tabel = ({ users }: { users: UserType[] }) => {
  return (
    <Table>
      <TableThead>
        <tr>
          <TableTh>Name</TableTh>
          <TableTh>UserName</TableTh>
          <TableTh>Email</TableTh>
          <TableTh>Phone</TableTh>
        </tr>
      </TableThead>
      <TableTbody>
        {users.map((user) => {
          return (
            <tr>
              <TableTd>{user.name}</TableTd>
              <TableTd>{user.username}</TableTd>
              <TableTd>{user.email}</TableTd>
              <TableTd>{user.phone}</TableTd>
            </tr>
          );
        })}
      </TableTbody>
    </Table>
  );
};
