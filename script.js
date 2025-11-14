const defaultMessages = [
  "Você ilumina qualquer dia com seu sorriso! ✨",
  "Lembre-se: você é incrível e merece tudo de bom! 💖",
  "Que hoje você espalhe tanta alegria quanto traz ao mundo! 🌷",
  "Nunca duvide da sua força – você é extraordinária! 💪",
  "Seu coração gentil faz do planeta um lugar melhor. 🌎",
  "Que cada passo seu seja rodeado de amor e luz. 🐝",
  "Você é como um raio de sol num dia de chuva! ☀️",
  "A sua existência já é motivo para celebrar. 🎉",
  "Continue brilhando do jeitinho que só você sabe. 🌟",
  "Se precisar, lembre-se: estou sempre torcendo por você! 🤗",
  "Você merece café, chocolate e abraços! ☕🍫",
  "Hoje você vai arrasar! 💋",
  "Você é a protagonista da sua história! 📖",
  "Diga sim para as aventuras! 🗺️",
  "Você é a melhor versão de si mesma! 💯",
  "Sua energia é poderosa! ⚡",
  "Você é inimitável! 🎨",
  "Deus abençoa quem faz o bem - e isso é você! 🙏",
  "Você é uma obra de arte em progresso! 🖼️",
  "Amanhã será melhor, mas hoje você já é incrível! 🌟",
  "Aproveite o agora, o momento presente é perfeito! ⏰",
  "Você está fazendo um ótimo trabalho! 👏",
  "Pequenos passos também chegam longe! 🚶‍♀️",
  "Você é suficiente assim como é! ✅",
  "Não precisa de permissão para ser feliz! 😄",
  "Sua jornada é única e perfeita! 🛤️",
  "Você é capaz de mais do que pensa! 🌟",
  "O melhor ainda está por vir! 🌅",
  "Seus melhores dias ainda não chegaram! 🎊",
  "A vida é cheia de surpresas boas esperando por você! 🎈",
  "Você merece um final feliz! 👰",
  "Cada novo dia traz novas oportunidades! 🌱",
  "Acredite na magia da vida! ✨",
  "Obrigada por ser quem você é! 🙏",
  "Você é um presente para este mundo! 🎁",
  "Sua presença faz tudo melhor! ☀️",
  "Estar perto de você é confortável e seguro! 🏠",
  "Você é meu favorito! 💕",
  "Obrigada por tornar os dias melhores! 🌻",
  "Você é um fofo de pessoa! 🍑",
  "Hoje é seu dia de brilhar (todo dia é)! 💫",
  "Você é feita de açúcar, especiarias e tudo de bom! 🌙",
  "Sua risada é a melhor música! 🎵",
  "Você é tipo um abraço em forma de pessoa! 🤍",
  "Mande beijos para o espelho – você merece! 😘",
  "Você é a vibe boa que o mundo precisa! 🌊",
  "Seja você mesma, todo mundo já está ocupado! 🦄",
  "Respire fundo, você está no caminho certo! 🌬️",
  "Permita-se descansar sem culpa! 😴",
  "Você merece momentos de paz e tranquilidade! 🧘‍♀️",
  "Tudo vai ficar bem! 🕊️",
  "Você está exatamente onde precisa estar! 📍",
  "Deixe o estresse e abrace a serenidade! 🌿",
  "Sua paz interior é sua maior riqueza! ✌️",
  "Você consegue! Acredite em si mesma! 🙌",
  "As dificuldades são passageiras, você é eterna! 🌟",
  "Sua coragem inspira todos ao redor! 💫",
  "Você é braba demais para desistir! 🐯",
  "Cada queda é uma chance de se levantar mais forte! 🚀",
  "Você tem tudo que precisa para vencer! 🎯",
  "Não importa o que venha, você vai passar! 💪",
  "Você é amada mais do que imagina! 💗",
  "Seu amor muda vidas! ❤️",
  "Você merece ser tratada como uma princesa! 👑",
  "Seu sorriso é contagiante! 😊",
  "Você é linda, talentosa e incrível! ✨",
  "Cada dia perto de você é especial! 💝",
  "Você faz a diferença na vida de quem te ama! 🌺",
  "Você merece toda a felicidade do mundo! 🌈",
  "Cada dia com você é uma bênção! 💕",
  "Sua determinação é inspiradora! 🔥",
  "O mundo é melhor porque você existe! 🌸",
  "Você é mais forte do que imagina! 💎",
  "Seus sonhos merecem ser realizados! 🌙",
  "Toda sua esforço será recompensado! 🏆",
  "Você tem o poder de mudar o mundo! ⚡",
  "Você ilumina qualquer dia com seu sorriso! ✨",
  "Lembre-se: você é incrível e merece tudo de bom! 💖",
  "Que hoje você espalhe tanta alegria quanto traz ao mundo! 🌷",
  "Nunca duvide da sua força – você é extraordinária! 💪",
  "Seu coração gentil faz do planeta um lugar melhor. 🌎",
  "Que cada passo seu seja rodeado de amor e luz. 🦋",
  "Você é como um raio de sol num dia de chuva! ☀️",
  "A sua existência já é motivo para celebrar. 🎉",
  "Continue brilhando do jeitinho que só você sabe. 🌟",
  "Se precisar, lembre-se: estou sempre torcendo por você! 🤗"
];

/* ---------- Estado ---------- */
let messages = [];
let index = 0;

/* ---------- Elementos ---------- */
const msgEl   = document.getElementById("msg");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const shareBtn= document.getElementById("share");
const editBtn = document.getElementById("edit");

const modal   = document.getElementById("modal");
const textBox = document.getElementById("textArea");
const saveBtn = document.getElementById("save");
const cancelBtn = document.getElementById("cancel");
const closeX  = document.querySelector(".close");

/* ---------- Inicialização ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const stored = localStorage.getItem("myMsgList");
  messages = stored ? JSON.parse(stored) : [...defaultMessages];
  showMessage();
});

/* ---------- Exibe a mensagem atual ---------- */
function showMessage() {
  msgEl.textContent = messages[index];
}

/* ---------- Navegação ---------- */
prevBtn.addEventListener("click", () => {
  index = (index - 1 + messages.length) % messages.length;
  showMessage();
});
nextBtn.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  showMessage();
});

/* ---------- Compartilhar / Copiar ---------- */
shareBtn.addEventListener("click", () => {
  const text = `${msgEl.textContent}\n(via Mensagens Infinitas 💌)`;
  if (navigator.share) navigator.share({ text });
  else {
    navigator.clipboard.writeText(text);
    alert("Mensagem copiada! Agora cole onde quiser 💜");
  }
});

/* ---------- Editar ---------- */
editBtn.addEventListener("click", () => {
  textBox.value = messages[index];
  modal.classList.add("active");
  textBox.focus();
});
function closeModal() {
  modal.classList.remove("active");
  textBox.value = "";
}
cancelBtn.addEventListener("click", closeModal);
closeX.addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

/* ---------- Salvar ---------- */
saveBtn.addEventListener("click", () => {
  const newMsg = textBox.value.trim();
  if (!newMsg) { alert("A mensagem não pode ser vazia!"); return; }
  messages[index] = newMsg;
  localStorage.setItem("myMsgList", JSON.stringify(messages));
  showMessage();
  closeModal();
});