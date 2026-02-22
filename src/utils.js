export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genel artırma fonksiyonu
export function incrementStateIndex(setState, index) {
  setState((prevArray) => {
    const newArray = [...prevArray]; // Orijinal diziyi korumak için kopyasını alıyoruz
    newArray[index] = (newArray[index] || 0) + 1; // Değeri 1 artırıyoruz
    return newArray;
  });
}
