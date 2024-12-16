import { useState, useEffect } from "react";
const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-900 to-purple-800">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
        {/* Heading */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-blue-800 mr-12">To-Do List</h1>
          <div className="flex justify-center">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/todo-list-2058735-1738002.png?f=webp&amp;w=256"
              alt="To-Do"
              className="flex w-10 h-10 flex-row -mr-[10rem] -mt-10"
            />
          </div>
        </div>
        <div className="flex items-center mb-4 relative">
  <input
    type="text"
    placeholder="Add Your Task"
    className="bg-[#e2e0e0] border-none rounded-full h-[40px] pl-5 pr-5 py-1.5 w-full sm:w-[400px] md:w-[500px] text-lg focus:outline-none"
    value={task}
    onChange={(e) => setTask(e.target.value)}
  />
  <button
    onClick={addTask}
    className="bg-[#ff4500] text-white rounded-full text-[16px] font-bold h-[40px] w-[120px] absolute right-0 cursor-pointer hover:bg-orange-600"
  >
    Add
  </button>
</div>

        {/* Divider */}
        <div className="bg-black h-[2px] my-4"></div>

        {/* Tasks */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Tasks</h2>
          {tasks.length === 0 ? (
            <p className="font-bold text-gray-500">No todos added</p>
          ) : (
            <ul className="list-disc list-inside text-left text-lg">
              {tasks.map((t, index) => (
                <li key={index} className="text-gray-700">
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
