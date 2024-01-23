import type { Plugin } from 'esbuild'
import type { ctx__be_T, ctx__get_T, ctx__set_T, sig_T } from 'rebuildjs/server'
import type { Config } from 'tailwindcss'
export declare const rebuild_tailwind_plugin__build_id$_:ctx__be_T<sig_T<string|undefined>, 'app'>
export declare const rebuild_tailwind_plugin__build_id_:ctx__get_T<string|undefined, 'app'>
export declare const rebuild_tailwind_plugin__build_id__set:ctx__set_T<string|undefined, 'app'>
export declare const rebuild_tailwind_plugin__ready$_:ctx__be_T<sig_T<boolean>, 'app'>
export declare const rebuild_tailwind_plugin__ready_:ctx__get_T<boolean, 'app'>
export declare function rebuild_tailwind_plugin_(config?:Config):Plugin
