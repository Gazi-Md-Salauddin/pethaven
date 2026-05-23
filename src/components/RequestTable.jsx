"use client";
import { format } from "date-fns";
import Link from "next/link";
import CancelAlert from "@/components/CancelAlert";

const RequestTable = ({ requests }) => {
    const reversedRequests = [...requests].reverse();
    return (
        <div className="p-4">
            <table className="w-full">
                {/* Desktop title */}
                <thead className="hidden md:table-header-group bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                            Pet Name
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                            Request Date
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                            Pickup Date
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                            Status
                        </th>
                        <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody className="flex flex-col gap-4 md:table-row-group">
                    {reversedRequests.map(request => (
                        <tr
                            key={request._id}
                            className="block md:table-row border rounded-xl shadow-sm p-4 md:p-0 bg-white"
                        >
                            <td className="block md:table-cell py-2 px-2">
                                <span className="font-semibold md:hidden">
                                    Pet Name:
                                </span>{" "}
                                {request.petName}
                            </td>

                            <td className="block md:table-cell py-2">
                                <span className="font-semibold md:hidden">
                                    Request Date:
                                </span>{" "}
                                {request.createdAt
                                    ? format(
                                          new Date(request.createdAt),
                                          "dd MMM yyyy"
                                      )
                                    : "N/A"}
                            </td>

                            <td className="block md:table-cell py-2">
                                <span className="font-semibold md:hidden">
                                    Pickup Date:
                                </span>{" "}
                                {format(
                                    new Date(request?.departureDate),
                                    "dd MMM yyyy"
                                )}
                            </td>

                            <td className="block md:table-cell py-2">
                                <span className="font-semibold md:hidden">
                                    Status:
                                </span>{" "}
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                                        request.status === "Approved"
                                            ? "bg-green-100 text-green-700"
                                            : request.status === "Pending"
                                              ? "bg-yellow-100 text-yellow-700"
                                              : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {request.status}
                                </span>
                            </td>

                            <td className="block md:table-cell py-2">
                                <div className="flex gap-2">
                                    <Link href={`/all-pets/${request.petId}`}>
                                        <button className="px-4 py-2 bg-[#F59E0B] text-white rounded-lg hover:bg-yellow-600">
                                            View
                                        </button>
                                    </Link>

                                    <CancelAlert request={request} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestTable;
