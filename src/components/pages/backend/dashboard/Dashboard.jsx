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
import useQueryData from "@/components/custom-hook/useQueryData";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

import IconNoData from "../partials/IconNoData";
import TableLoader from "../partials/TableLoader";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
    status,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  const {
    isLoading: isLoadingFood,
    isFetching: isFetcingFood,
    error: errorFood,
    data: dataFood,
  } = useQueryData(
    `/v2/food`, // endpoint
    "get", // method
    "food" // key
  );
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div>
                <div className="grid grid-cols-[1fr_400px] gap-5">
                  <div className="stats ">
                    <div className="chart pb-24">
                      <h2>Menu Prices</h2>
                      <BarChart
                        width={1000}
                        height={400}
                        data={menus.slice(0, 10)}
                        margin={{
                          top: 20,
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
                    <div className="relative">
                      {isFetchingCategory && !isLoadingCategory && (
                        <FetchingSpinner />
                      )}
                      {isLoadingCategory && <TableLoader cols={4} count={20} />}
                      {dataCategory?.count === 0 && <IconNoData />}
                      <div className="grid grid-cols-4 gap-5  overflow-auto custom-scroll ">
                        {dataCategory?.data.map((item, key) => {
                          return (
                            <DashboardCard
                              item={item}
                              key={key}
                              dataFood={dataFood}
                            />
                          );
                        })}
                      </div>
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
