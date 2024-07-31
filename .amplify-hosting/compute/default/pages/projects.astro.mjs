/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcngID5E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D9tqDkaY.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Xest" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div>
Projects
</div>` })}`;
}, "/home/xest/dev/xest-portfolio/src/pages/projects.astro", void 0);

const $$file = "/home/xest/dev/xest-portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
