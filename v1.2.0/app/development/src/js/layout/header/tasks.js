import { TODO_DATA } from "../../views/todo-lists/data";

export const tasks = () => {
	const WRAPPER = document.getElementById("top-tasks");

	if (WRAPPER) {
		let list = "";
		const LIMIT = 8;
		let last = LIMIT - 1;

		TODO_DATA.slice(0, LIMIT).map((item, index) => {
			list += `<div class="px-6 py-1">
						<div class="form-check">
							<input class="form-check-input todo-checkbox" type="checkbox" value="" id="task-${item.id}">
							<label class="form-check-label pb-3.5 d-block" for="task-${item.id}">
								<div class="mb-1 fs-7 text-truncate text-body-emphasis">${item.title}</div>
								<div class="d-flex align-items-center text-body-secondary">
									<div class="badge rounded-pill truncate text-invert ${item.color}">${item.label}</div>
									${
										item.due.date
											? `<div class="mx-2">-</div>
												<div class="fs-8">${item.due.date}</div>`
											: ""
									}
									<div class="mx-2">-</div>
									<div class="fs-8 fw-medium">${item.priority}</div>
								</div>
							</label>
						</div>
					</div>`;
		});

		WRAPPER.innerHTML = list;
	}
};
