export const statsData = [
  {
    id: 1,
    title: "Total Sales",
    stat: "₹1,50,000",
    change: "+5.3%",
    bgColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "New Customers",
    stat: "1,234",
    change: "+8.4%",
    bgColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Pending Invoices",
    stat: "₹50,000",
    change: "-1.2%",
    bgColor: "bg-red-500",
  },
  {
    id: 4,
    title: "Active Projects",
    stat: "15",
    change: "+3.7%",
    bgColor: "bg-purple-500",
  },
];


export const barData = {
  labels: ["Product A", "Product B", "Product C", "Product D"],
  datasets: [
    {
      label: "Product Sales",
      data: [15000, 23000, 18000, 12000],
      backgroundColor: ["#2196F3", "#F44336", "#FF9800", "#4CAF50"],
    },
  ],
}; 

export const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales Revenue",
      data: [3000, 5000, 4000, 7000, 5000, 8000, 7500],
      fill: false,
      borderColor: "#4CAF50",
      tension: 0.3,
    },
  ],
};

export const pieData = {
  labels: ["Sales", "Marketing", "Support", "Development"],
  datasets: [
    {
      label: "Department Spendings",
      data: [30, 20, 15, 35],
      backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#2196F3"],
      hoverOffset: 4,
    },
  ],
};
