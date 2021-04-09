class BrowserHistory:

    def __init__(self, homepage: str):
        self.history = []
        self.curr_idx = 0
        self.history.append(homepage)

    def visit(self, url: str) -> None:
        self.history = self.history[:self.curr_idx + 1]
        self.history.append(url)
        self.curr_idx += 1

    def back(self, steps: int) -> str:
        past_idx = self.curr_idx - steps

        if past_idx < 0:
            # cannot move back
            self.curr_idx = 0
        else:
            self.curr_idx = past_idx
        return self.history[self.curr_idx]

    def forward(self, steps: int) -> str:
        future_idx = steps + self.curr_idx
        last_idx = len(self.history) - 1

        if future_idx > last_idx:
            # cannot move forward
            self.curr_idx = last_idx
        else:
            self.curr_idx = future_idx

        return self.history[self.curr_idx]

