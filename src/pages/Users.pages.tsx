import { useState } from "react";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import { Tabel } from "../components/Tabel";
import { useGetAllUsersQuery } from "../redux/userAPI";
import { Options, UserType } from "../types/UserType";
import { filterUserTypes } from "../types/userTypeGuard";

export const UsersPage = () => {
  const { data, isFetching } = useGetAllUsersQuery();
  const [searchOpt, setSsearchOpt] = useState<Options>("name");
  const [searchVal, setSsearchVal] = useState("");

  const calculateContacts = (data: UserType[]) => {
    const normalizeFilter = searchVal.toLowerCase();
    if (data) {
      return data.filter((user) =>
        user[searchOpt].toLowerCase().includes(normalizeFilter)
      );
    }
    return [];
  };
  let users: UserType[] = [];

  if (!isFetching && !!data && Array.isArray(data)) {
    const items = filterUserTypes(data);
    users = calculateContacts(items);
  }
  return !!data ? (
    <div>
      <Header
        searchOption={searchOpt}
        setSearchOption={setSsearchOpt}
        setInputValue={setSsearchVal}
        searchVal={searchVal}
      />
      <section>
        <Tabel users={users} />
      </section>
    </div>
  ) : (
    <Loader></Loader>
  );
};
