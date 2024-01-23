export type Payment = {
  id: string;
  amount: number;
  status: "online" | "offline";
  email: string;
  username: string;
  action: string;
};

export type Orders = {
  id: string;
  order: string;
  status: "Pending" | "Processing" | "Completed";
  lastOrder: string;
  method: string;
};
