/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcngID5E.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D9tqDkaY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Xest", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto p-4 max-w-4xl text-white text-lg leading-relaxed" data-astro-cid-j7pv25f6> <!-- About Section --> <!-- <section id="about" class="py-20">
            <About />
        </section> --> <!-- <section id="projects">
			<Projects />
		</section> --> </main> ` })} `;
}, "/home/xest/dev/xest-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/xest/dev/xest-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
