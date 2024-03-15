import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";
import Icon, { IIconType } from "@/src/icons";

const LNB_ITEMS: { name: string; icon: IIconType; label: string }[] = [
  {
    name: "photos",
    icon: "bell",
    label: "Photos",
  },
  {
    name: "collections",
    icon: "collections",
    label: "Collections",
  },
  {
    name: "users",
    icon: "users",
    label: "Users",
  },
];

const SearchLnb = () => {
  const router = useRouter();
  const { keyword = "", category = "" } = router.query;
  return (
    <Container>
      <div className="search-nav">
        {LNB_ITEMS.map(({ name, icon, label }) => (
          <Link
            href={`/search/${name}/${keyword}`}
            className={classNames("nav-item", {
              "is-active": category === "photos",
            })}
          >
            <Icon icon={icon} /> {label}
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .search-nav {
    display: flex;
    align-items: center;
    gap: 16px;
    .nav-item {
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 50px;
      font-size: 16px;
      cursor: pointer;
      &.is-active {
        //border-bottom: 1px solid #ddd;
      }
    }
  }
`;

export default SearchLnb;
