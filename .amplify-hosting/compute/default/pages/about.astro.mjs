/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcngID5E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D9tqDkaY.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Xest" })} ${maybeRenderHead()}<div>
Xest
</div>`;
}, "/home/xest/dev/xest-portfolio/src/pages/about.astro", void 0);

const $$file = "/home/xest/dev/xest-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
