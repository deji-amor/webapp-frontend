import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default {
	// https://github.com/vitejs/vite/issues/1973
	define: {
		...(import.meta.env?.NODE_ENV === "development" ? {global: "window"} : {}),
	},
	server: {
		port: 3000,
	},
	resolve: {
		// https://github.com/aws-amplify/amplify-js/issues/9639
		alias: {
			"./runtimeConfig": "./runtimeConfig.browser",
		},
	},
	plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
		coverage: {
			reporter: ["text", "html"],
			exclude: ["node_modules/", "src/setupTests.ts"],
		},
	},
	build: {
		outDir: "build",
		sourcemap: true,
		commonjsOptions: {
			include: [/node_modules/],
			extensions: [".js", ".cjs"],
			strictRequires: true,
			// https://stackoverflow.com/questions/62770883/how-to-include-both-import-and-require-statements-in-the-bundle-using-rollup
			transformMixedEsModules: true,
		},
	},
};
