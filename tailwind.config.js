module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled: true,
    layers: ["components", "utilities"],
    content: [
      "./snippets/*.liquid",
      "./sections/*.liquid",
      "./templates/*.liquid",
      "./layout/*.liquid",
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
