const completionSpec: Fig.Spec = {
  name: "rider",
  description: "JetBrains Rider",
  args: {
    template: ["filepaths", "folders"],
    isVariadic: true,
  },
};

export default completionSpec;
