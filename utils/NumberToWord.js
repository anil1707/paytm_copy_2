export const numberToWords = (num) => {
    const ones = [
      "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
    ];
    const teens = [
      "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
      "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = [
      "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    const thousands = "Thousand";
  
    if (num === 0) return "Zero";
  
    let words = "";
  
    // Handle thousands
    if (num >= 1000) {
      const thousandsPlace = Math.floor(num / 1000);
      if (thousandsPlace >= 100) {
        const hundredsInThousands = Math.floor(thousandsPlace / 100);
        words += ones[hundredsInThousands] + " Hundred ";
      }
      if (thousandsPlace % 100 >= 11 && thousandsPlace % 100 <= 19) {
        words += teens[thousandsPlace % 100 - 11] + " ";
      } else {
        const tensInThousands = Math.floor((thousandsPlace % 100) / 10);
        const onesInThousands = thousandsPlace % 10;
        words += tens[tensInThousands] + " ";
        words += ones[onesInThousands] + " ";
      }
      words += thousands + " ";
      num %= 1000; // Reduce the number
    }
  
    // Handle hundreds
    if (num >= 100) {
      const hundredsPlace = Math.floor(num / 100);
      words += ones[hundredsPlace] + " Hundred ";
      num %= 100;
    }
  
    // Handle teens
    if (num >= 11 && num <= 19) {
      words += teens[num - 11] + " ";
      return words.trim();
    }
  
    // Handle tens
    if (num >= 10) {
      const tensPlace = Math.floor(num / 10);
      words += tens[tensPlace] + " ";
      num %= 10;
    }
  
    // Handle ones
    if (num > 0) {
      words += ones[num] + " ";
    }
  
    return words.trim();
  };

  