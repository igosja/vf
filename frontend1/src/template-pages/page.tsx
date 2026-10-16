import Sidebar from "@/app/partials/_sidebar";
import SidebarToggle from "@/app/partials/_sidebar-toggle";
import SalesOverview from "@/app/partials/sales/_overview";
import SalesHistory from "@/app/partials/sales/_sales-history";
import StoreSessions from "@/app/partials/sales/_store-sessions";
import RecentOrders from "@/app/partials/sales/_recent-orders";
import TopProducts from "@/app/partials/sales/_top-products";
import NavBar from "@/partials/_nav-bar";

export default function Home() {
    return (
        <>
            <Sidebar/>
            <div id="content" data-simplebar>
                <div className="content-body content-body-centered">
                    <div className="header">
                        <SidebarToggle/>

                        <h2 className="header-title ps-xl-2">E-Commerce</h2>

                        <i className="ms-auto"></i>

                        <div className="range-picker range-picker-header d-none d-md-flex">
                            <div className="btn btn-theme">
                                <i className="ph ph-calendar-dots fs-3 me-2 position-relative"></i>
                                <input
                                    type="text"
                                    name="start"
                                    value="07/10/2023"
                                    className="form-control w-24"
                                    required
                                    readOnly
                                />
                                <span className="mx-n6">-</span>
                                <input
                                    type="text"
                                    name="end"
                                    value="07/13/2023"
                                    className="form-control text-end w-24"
                                    required
                                    readOnly
                                />
                            </div>
                        </div>

                        <div className="d-flex gap-1.5 ms-4">
                            <a href="" className="icon ph ph-plus-circle"></a>
                            <a href="" className="icon ph ph-info"></a>
                            <a href="" className="icon ph ph-circles-four"></a>
                        </div>
                    </div>

                    <SalesOverview/>

                    <div className="row row-cols-lg-2 g-4">
                        <div className="col">
                            <SalesHistory/>
                        </div>
                        <div className="col">
                            <StoreSessions/>
                        </div>
                        <div className="col">
                            <RecentOrders/>
                        </div>
                        <div className="col">
                            <TopProducts/>
                        </div>
                    </div>
                </div>
            </div>
            <NavBar/>
        </>
    );
}
