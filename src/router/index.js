import { createRouter, createWebHashHistory } from "";
import index from "";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: index }],
});
export default router;
