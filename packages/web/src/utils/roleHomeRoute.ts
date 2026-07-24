export const roleHomeRoute = (role: string | undefined) => {
  if (role === "Admin" || role === "Urged_Staff") return "/AdminOrders";
  if (role === "Rider") return "/DeliveryOrders";
  if (role === "Restaurant" || role === "Restaurant_Admin") {
    return "/RestaurantDashboard";
  }
  return "/Dashboard";
};
