// Global Scope: The outermost layer
function abc() {
    // Scope of abc: Can access Global variables and its own 'a'
    let a = 12;

    function def() {
        // Scope of def: Can access 'a' from abc (its parent) and its own 'b'
        // This is "Lexical Scoping" in action.
        let b = 13;

        function ghi() {
            // Scope of ghi: The deepest level
            // It can see 'c', 'b' (from def), and 'a' (from abc)
            let c = 15;

            console.log(a, b, c); // All three are accessible here
        }

        // ghi() can see 'b', but def() CANNOT see 'c'
    }

    // abc() CANNOT see 'b' or 'c'. Scope lookup only moves outwards.
}