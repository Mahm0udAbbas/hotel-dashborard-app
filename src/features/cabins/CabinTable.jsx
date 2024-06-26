import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: ;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

export default function CabinTable() {
  const { status, cabins, error } = useCabins();
  const [searchParams] = useSearchParams();
  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  const filteredValue = searchParams.get("discount") || "all";

  let filteredCabins;
  if (filteredValue === "all") {
    filteredCabins = cabins;
  }
  if (filteredValue === "with-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }
  if (filteredValue === "no-discount") {
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  }

  return (
    <Menus>
      <Table role="tabel" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div>image</div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div>operations</div>
        </Table.Header>
        <Table.Body
          data={filteredCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
}
