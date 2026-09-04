export default function OrderStatus({
  status
}) {

  const statusMap = {

    0:{
      label:"Placed",
      className:"bg-blue-100 text-blue-700",
    },

    1:{
      label:"Packed",
      className:"bg-indigo-100 text-indigo-700",
    },

    2:{
      label:"Dispatched",
      className:"bg-purple-100 text-purple-700",
    },

    3:{
      label:"Shipped",
      className:"bg-amber-100 text-amber-700",
    },

    4:{
      label:"At Your Nearest Store",
      className:"bg-orange-100 text-orange-700",
    },

    5:{
      label:"Out for Delivery",
      className:"bg-yellow-100 text-yellow-800",
    },

    6:{
      label:"Delivered",
      className:"bg-green-100 text-green-700",
    },

    7:{
      label:"Return Initiated",
      className:"bg-red-100 text-red-700",
    },

    8:{
      label:"Returned",
      className:"bg-red-200 text-red-800",
    },

    9:{
      label:"Refunded",
      className:"bg-gray-200 text-gray-700",
    },

  };



  const currentStatus =
    statusMap[status] || {
      label:"Unknown",
      className:"bg-gray-100 text-gray-500",
    };



  return (

    <span
      className={`
      text-[10px]
      sm:text-xs
      px-[9px]
      py-[3px]
      rounded-full
      font-medium
      whitespace-nowrap
      ${currentStatus.className}
      `}
    >

      {currentStatus.label}

    </span>

  );
}