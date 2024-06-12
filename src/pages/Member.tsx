import { useEffect, useState } from "react";
import apiUrl from "../../api";
import ClipLoader from "react-spinners/ClipLoader";

const Member = () => {
  const [members, setMembers] = useState<any>([]);
  const [loading, setLoading] = useState<any>(true); 
  const [currentPage, setCurrentPage] = useState<any>(1);
  const membersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiUrl.get("/member");
        setMembers(response.data?.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchUsers();
  }, []);

  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(members.length / membersPerPage);

  return (
    <>
      <div className="px-2 md:pt-24 ">
        <h1 className="text-2xl font-bold mb-4">All Members</h1>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
<ClipLoader color="#36d7b7" />
</div>
        ) : (
          <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Full Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentMembers.map((member:any) => (
                    <tr key={member?.id} className="bg-white border-b ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {`${member?.first_name} ${member?.middle_name} ${member?.last_name}`}
                      </th>
                      <td className="px-6 py-4">{member?.address}</td>
                      <td className="px-6 py-4">{member?.phone_number}</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                        >
                          Edit
                        </a>
                        <a
                          href="#"
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-4">
              <nav>
                <ul className="inline-flex -space-x-px">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={() => paginate(index + 1)}
                        className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === index + 1 ? "bg-gray-100" : ""
                          }`}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Member;
