const fs = require('fs');
// Step 1: Create two text files
fs.writeFile("file1.txt", "Hello from File 1!\nThis is the first file.", function(err) {
    if (err) {
        return console.log("Error writing file1:", err);
    }
    console.log("File1.txt created successfully!");
    
    // Create second file after first one is done
    fs.writeFile("file2.txt", "Hello from File 2!\nThis is the second file.", function(err) {
        if (err) {
            return console.log("Error writing file2:", err);
        }
        console.log("File2.txt created successfully!");
        
        // Step 2: Read data from both files and combine them
        fs.readFile("file1.txt", "utf8", function(err, data1) {
            if (err) {
                return console.log("Error reading file1:", err);
            }
            console.log("File1 content:", data1);
            
            fs.readFile("file2.txt", "utf8", function(err, data2) {
                if (err) {
                    return console.log("Error reading file2:", err);
                }
                console.log("File2 content:", data2);
                
                // Step 3: Combine the data and write to a new file
                const combinedData = "=== COMBINED DATA ===\n\n" +
                                   "Content from File1:\n" + data1 + "\n\n" +
                                   "Content from File2:\n" + data2 + "\n\n" +
                                   "=== END OF COMBINED DATA ===";
                
                fs.writeFile("combined.txt", combinedData, function(err) {
                    if (err) {
                        return console.log("Error writing combined file:", err);
                    }
                    console.log("Combined data written to combined.txt successfully!");
                });
            });
        });
    });
});