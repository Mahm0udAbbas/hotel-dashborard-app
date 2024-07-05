import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterFiled="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With Discount" },
          { value: "no-discount", label: "No Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Name (A-Z)" },
          { value: "name-desc", label: "Name (Z-A)" },
          { value: "regularPrice-asc", label: "Price (Low To High)" },
          { value: "regularPrice-desc", label: "Price (High to Low)" },
          { value: "maxCapacity-asc", label: "MaxCapcity (Low To High) " },
          { value: "maxCapacity-desc", label: "MaxCapcity (High to Low)" },
        ]}
      />
    </TableOperations>
  );
}
