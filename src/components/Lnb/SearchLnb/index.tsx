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
    icon: "bell",
    label: "Collections",
  },
  {
    name: "users",
    icon: "bell",
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
      align-items: center;
      justify-content: center;
      height: 50px;
      font-size: 16px;
      cursor: pointer;
      &.is-active {
        color: blue;
      }
    }
  }
`;

export default SearchLnb;
