import styled from "@emotion/styled";
import { IconSearch } from "@/src/icons";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  shape?: "round" | "square";
}
const SearchBox = ({ shape }: Props) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) {
      alert("검색어를 입력해주세요.");
      return;
    }
    router.push(`/search/photos/${value}`);
  };

  return (
    <Container className={`SearchBox ${shape}`}>
      <Form onSubmit={handleSubmit}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button type="submit">
          <IconSearch />
        </button>
        <input
          placeholder="Search high-resolution images"
          onChange={handleChange}
        />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  background: #eee;
  border-radius: 100px;
  .round & {
    border-radius: 100px;
    background: #eee;
  }
  .square & {
    border-radius: 6px;
    background: #fff;
  }

  button {
    display: flex;
    padding-left: 16px;

    svg {
      .round & {
        width: 20px;
      }
      .square & {
        width: 24px;
        font-size: 15px;
      }
    }
  }
  input {
    height: 40px;
    flex: 1;
    outline: 0;
    padding: 8px;
    .round & {
      height: 40px;
    }
    .square {
      height: 54px;
    }
  }
`;

export default SearchBox;
