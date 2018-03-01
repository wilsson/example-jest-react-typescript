module.exports =   {
    verbose: true,
    snapshotSerializers: ["enzyme-to-json/serializer"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/test/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
}