import Cart from "./cart";
import Filter from "./FILTER.JSX";
import Search from "./search";
import Sort from "./sort";

export default function ItemHeader() {
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <Sort />
          <Filter />
        </div>
        <div className="flex gap-2 items-center">
          <Search />
          <Cart />
        </div>
      </div>
    </div>
  );
}
