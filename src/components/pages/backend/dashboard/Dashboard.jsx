import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { menus } from "../menu-Data";

const Dashboard = () => {
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee" />
            <div className="p-8">
              <div className="p-8">
                <div className="grid grid-cols-[1fr_400px] gap-5">
                  <div className="stats">
                    <div className="grid grid-cols-4 gap-5">
                      <DashboardCard title="Chicken" filterby="Chicken" />
                      <DashboardCard title="Value Meal" filterby="Value Meal" />
                      <DashboardCard title="Burger" filterby="Burger" />
                      <DashboardCard title="Spaghetti" filterby="Spaghetti" />
                      <DashboardCard title="Palabok" filterby="Palabok" />
                      <DashboardCard title="Sides" filterby="Sides" />
                      <DashboardCard title="Dessert" filterby="Dessert" />
                      <DashboardCard title="Steak" filterby="Steak" />
                    </div>

                    <div className="chart  py-2">
                      <h2>Menu Prices</h2>
                      <BarChart
                        width={1300}
                        height={500}
                        data={menus.slice(0, 10)}
                        margin={{
                          top: 40,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="menu_title" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="menu_price"
                          fill="#8884d8"
                          activeBar={<Rectangle fill="yellow" stroke="blue" />}
                        />
                      </BarChart>
                    </div>
                  </div>
                  <div className="sidebar overflow-auto custom-scroll h-[calc(100vh-250px)]">
                    <DashboardAccordion
                      title="Spaghetti"
                      filterby="Spaghetti"
                    />
                    <DashboardAccordion title="Chicken" filterby="Chicken" />
                    <DashboardAccordion
                      title="Value Meal"
                      filterby="Value Meal"
                    />
                    <DashboardAccordion title="Burger" filterby="Burger" />
                    <DashboardAccordion title="Palabok" filterby="Palabok" />
                    <DashboardAccordion title="Sides" filterby="Sides" />
                    <DashboardAccordion title="Dessert" filterby="Dessert" />
                    <DashboardAccordion title="Steak" filterby="Steak" />
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
