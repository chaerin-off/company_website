import React, { useState } from "react";

const Board = () => {
  //현재 페이지 번호를 상태로 관리. 처음은 1페이지로 지정
  const [currentPage, setCurrentPage] = useState(1);
  //한 페이지에 보여지는 게시물 개수도 상태로 관리. 처음은 10개로 지정
  const [itemsPerPage, setItemsPerPage] = useState(10);

  //더미 포스트 객체
  const dummyPosts = [
    {
      _id: 1,
      number: 1,
      title: "첫 번째 게시물",
      createdAt: "2023-11-01T10:00:00",
      views: 10,
    },
    {
      _id: 2,
      number: 2,
      title: "두 번째 게시물",
      createdAt: "2023-11-02T11:30:00",
      views: 20,
    },
    {
      _id: 3,
      number: 3,
      title: "세 번째 게시물",
      createdAt: "2023-11-03T14:00:00",
      views: 30,
    },
    {
      _id: 4,
      number: 4,
      title: "네 번째 게시물",
      createdAt: "2023-11-04T16:45:00",
      views: 40,
    },
    {
      _id: 5,
      number: 5,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
    {
      _id: 6,
      number: 6,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
    {
      _id: 7,
      number: 7,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
    {
      _id: 8,
      number: 8,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
    {
      _id: 9,
      number: 9,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
    {
      _id: 10,
      number: 10,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
    {
      _id: 11,
      number: 11,
      title: "다섯 번째 게시물",
      createdAt: "2023-11-05T09:15:00",
      views: 50,
    },
  ];

  //한 페이지 당 몇개를 보여주는지 설정
  const indexOfLastPage = currentPage * itemsPerPage;
  const indexOfFirstPage = indexOfLastPage - itemsPerPage;
  //현재 페이지에서 보여줘야 할 게시글 배열 자르기(0번 게시물~9번 게시물): 사용자가 페이지를 이동해도 그 페이지에 맞는 포스트를 보여줄 수 있음
  const currentPosts = dummyPosts.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto py-32 md:py-32">
      <h1 className="text-4xl md:text-5xl mb-6 md:mb-8 text-center">
        업무 게시판
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[8%]">
                번호
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-auto">
                제목
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                작성일
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider w-[8%]">
                조회수
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentPosts.map((posts) => (
              //각 테이블 행은 id를 가짐. 렌더링 할 때 이 key(id)값을 기준으로 비교
              <tr key={posts._id} className="hover:bg-gray-50 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">{posts.number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{posts.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {posts.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{posts.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Board;
