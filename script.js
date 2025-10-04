function addTask() {
  const taskName = document.getElementById("taskName").value.trim();
  const taskDate = document.getElementById("taskDate").value;
  const taskCategory = document.getElementById("taskCategory").value;
  const taskList = document.getElementById("taskList");

  if (taskName === "" || taskDate === "") {
    alert("Isi nama dan tanggal tugas!");
    return;
  }

  // Buat elemen li
  const li = document.createElement("li");

  // Buat div info tugas
  const infoDiv = document.createElement("div");
  infoDiv.className = "task-info";

  const nameSpan = document.createElement("span");
  nameSpan.className = "task-name";
  nameSpan.textContent = taskName + " (" + taskCategory + ")";

  const dateSpan = document.createElement("span");
  dateSpan.className = "task-date";
  dateSpan.textContent = "Deadline: " + taskDate;

  infoDiv.appendChild(nameSpan);
  infoDiv.appendChild(dateSpan);

  // Klik info → tandai selesai
  infoDiv.onclick = function() {
    li.classList.toggle("completed");
  };

  // Tombol hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(infoDiv);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Reset input
  document.getElementById("taskName").value = "";
  document.getElementById("taskDate").value = "";
  document.getElementById("taskCategory").value = "Pribadi";
}