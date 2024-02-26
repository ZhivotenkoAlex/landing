//
// Compatibility fix for sort imports and tailwind css plugin
// https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31#issuecomment-1024722576
//

const tailwind = require("prettier-plugin-tailwindcss");
const organizeImports = require("@ianvs/prettier-plugin-sort-imports");

const combinedFormatter = {
    ...tailwind,
    parsers: {
        ...tailwind.parsers,
        ...Object.keys(organizeImports.parsers).reduce((acc, key) => {
            acc[key] = {
                ...tailwind.parsers[key],
                preprocess(code, options) {
                    return organizeImports.parsers[key].preprocess(code, options);
                },
            };
            return acc;
        }, {}),
    },
};

module.exports = combinedFormatter;
