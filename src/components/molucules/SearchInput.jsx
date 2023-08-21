import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <Input />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};
