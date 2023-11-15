import styled from "@emotion/styled";
import { IconSearch } from "@/src/icons";

interface Props {
  shape?: "round" | "square";
}
const SearchBox = ({ shape }: Props) => {
  return (
    <Container className={`SearchBox ${shape}`}>
      <Form>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button>
          <IconSearch />
        </button>
        <input placeholder="Search high-resolution images" />
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
