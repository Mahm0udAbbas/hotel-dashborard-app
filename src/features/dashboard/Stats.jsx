import React from "react";
import Stat from "./Stat";
import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1) Bookings

  const numBookings = bookings.length;

  // 2) Sales Amount

  const sales = bookings.reduce(
    (acc, currBook) => acc + currBook.totalPrice,
    0
  );

  // 3)  chechins

  const checkins = confirmedStays.length;

  // 4) Occupancy Rate

  const occupancy = confirmedStays.reduce(
    (acc, curr) => acc + curr.numNights,
    0
  );

  const nightsAvilable = numDays * cabinCount;

  const occupationRate = occupancy / nightsAvilable;
  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        value={numBookings}
        color="blue"
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        value={formatCurrency(sales)}
        color="green"
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="checkins"
        value={checkins}
        color="blue"
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy Rate"
        value={`${Math.round(occupationRate * 100)}%`}
        color="yellow"
      />
    </>
  );
}
