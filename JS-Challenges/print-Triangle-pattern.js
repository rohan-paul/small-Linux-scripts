/*Print the following pattern
Input Variable : Number of rows
#
# #
# # #
# # # #
# # # # #
# # # # # #
# # # # # # #
*/

function printTriangle(rows) {
	let char = ''

	for (let i = 1; i <= rows; i++) {
		for ( let j = 1; j <= i; j++) {
			char = char + " # ";
		}
		console.log((char));

		char = ''; // Reset the char after printing
	}
}

printTriangle(7);

/*Explanation
A) The target is to print # on line-1 >> then print # # in line line 2 and so on.

B) So when i = 1, I will print #  >> when i == 2, I will print # # and so on

C) So for each value of i, do another inner loop and build up the 'char' variable with i-number of #

D) Then when inner loop is done, print the char variable.

E) After printing, reset char, so for the next line it can print again.

*/