import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Empty from "./../../ui/Empty";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const { bookings, status } = useBookings();
  const  [searchParams , setSearchParams] =useSearchParams()


  if (status === "loading") {
    return <Spinner />;
  }

  if (!bookings.length) return <Empty resource="bookings" />;

 // 1) filter

  // const  filteredValue = searchParams.get("status") || "all"
 
  // let filterdBookings;
 
  // if (filteredValue === "all") {
  //   filterdBookings = bookings;
  // }
  // if (filteredValue === "checked-out") {
  //   filterdBookings = bookings.filter((booking)=> booking.status === "checked-out");
  // }
  // if (filteredValue === "checked-in") {
  //   filterdBookings = bookings.filter((booking)=> booking.status === "checked-in");
  // }
  // if (filteredValue === "unconfirmed") {
  //   filterdBookings = bookings.filter((booking)=> booking.status === "unconfirmed");
  // }

  // // 2) Sort
  // const sortBy = searchParams.get("sortBy") || "startDate-asc"
  // const [field , dir] = sortBy.split("-")
  // const modifier = dir === "asc"? 1 : -1
  // let sortedBookings = filterdBookings.sort((a,b)=> (a[field] - b[field]) * modifier) 





  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingTable;
