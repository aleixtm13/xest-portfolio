import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_BcngID5E.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="flex space-x-6"> <li><a href="#home" class="text-white hover:text-yellow-400">Inici</a></li> <li><a href="/about" class="text-white hover:text-yellow-400">Sobre mi</a></li> <li><a href="/projects" class="text-white hover:text-yellow-400">Projectes</a></li> <li><a href="#contact" class="text-white hover:text-yellow-400">Contact</a></li> </ul> </nav>`;
}, "/home/xest/dev/xest-portfolio/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-gray-800 text-white p-4"> <div class="container mx-auto flex justify-between items-center"> <h1 class="text-2xl font-bold leading-tight text-center mb-4 text-gradient">Hola hola coca cola</h1> ${renderComponent($$result, "Navbar", $$Navbar, {})} </div> </header>`;
}, "/home/xest/dev/xest-portfolio/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </html>`;
}, "/home/xest/dev/xest-portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
