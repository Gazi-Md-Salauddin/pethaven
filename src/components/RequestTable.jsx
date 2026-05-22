"use client";
import { format } from "date-fns";
import Link from "next/link";
import CancelAlert from "@/components/CancelAlert";
import RequestModal from "@/components/RequestModal";

const RequestTable = ({ requests }) => {
    const reversedRequests = [...requests].reverse();
    return (
        <div className="overflow-x-auto p-6">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
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

                <tbody>
                    {reversedRequests.map(request => (
                        <tr
                            key={request._id}
                            className="border-t hover:bg-gray-50 transition"
                        >
                            <td className="px-6 py-4">{request.petName}</td>
                            <td className="px-6 py-4">
                                {request.createdAt
                                    ? format(
                                          new Date(request.createdAt),
                                          "dd MMM yyyy"
                                      )
                                    : "N/A"}
                            </td>
                            <td className="px-6 py-4">
                                {format(
                                    new Date(request?.departureDate),
                                    "dd MMM yyyy"
                                )}
                            </td>
                            <td className="px-6 py-4">
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
                            <td className="px-6 py-4 flex justify-center gap-2">
                                <Link href={`/all-pets/${request.petId}`}>
                                    <button className="px-4 py-2 bg-[#F59E0B] text-white rounded-lg hover:bg-yellow-600">
                                        View
                                    </button>
                                </Link>
                                
                                
                                <CancelAlert request={request} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RequestTable;
