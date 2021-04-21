from collections import defaultdict

# Kahn's Algorith
class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        kahn_queue = []
        top_sort = []
        adj_list = defaultdict(list)
        # build adjacency list
        node_count = 0
        for relation in prerequisites:
            next_course, prev_course = relation[0], relation[1]
            adj_list[prev_course].append(next_course)

        # populate in_degrees
        in_degrees = [0] * (numCourses)
        for r in adj_list:
            for e in adj_list[r]:
                in_degrees[e] += 1

        # enq zero vertices
        for i, v in enumerate(in_degrees):
            if v == 0:
                kahn_queue.append(i)

        while kahn_queue:
            # dequeue the queue
            curr_node = kahn_queue.pop(0)
            top_sort.append(curr_node)

            # visit neighbor nodes
            for i in adj_list[curr_node]:
                in_degrees[i] -= 1
                # If in-degree becomes zero, add it to queue
                if in_degrees[i] == 0:
                    kahn_queue.append(i)

            node_count += 1
        # Check if there was a cycle
        if node_count != numCourses:
            return False
        else:
            return True
