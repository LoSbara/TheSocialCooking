# TheSocialCooking
Il progetto è un social in cui sarà possibile inserire e visualizzare ricette di altri utenti.

Si suddivide in frontend e backend
FRONTEND:
Il frontend (scritto con REACT Bootstrap) è suddiviso in 5 file JS: 1 Auth, per l'autenticazione (login e registrazione); 2 Home, per la home page del social; 3 Profile, per la profile page del social; 4 Search, per la page in cui è possibile ricercare le ricette (per nome della ricetta); 5 Added, per la page di aggiunta ricette accessibile dal profilo

BACKEND:
Il backend (scritto tramite Eclips java) è suddiviso in 9 package:
1. com.exemple.demo -> contiene file avente il main del programma, ed è il file da startare per far partire le funzionalità del backend
2. com.exemple.demo.controller -> contiene 2 file (RecipesController e UserController) che gestiscono i dati ricevuti in input dal frontend
3. com.exemple.demo.model -> contiene 2 file (Recipe e User) che sono le Entity del programma con i loro attributi
4. com.exemple.demo.repository -> contiene 2 file (RecipeRepository e UserRepository) che contengono le SELECT che il backend chiede al DB
5. com.exemple.demo.request.recipe -> contiene 3 file (AddingDTO, IdUserDTO e SearchByNameDTO) che sono le DTO per la recezione dei file in input e per la verifica se nulli o meno
6. com.exemple.demo.request.user -> contiene 2 file (LoginDTO e RegistrationDTO) che sono le DTO per la recezione dei file in input e per la verifica se nulli o meno
7. com.exemple.demo.response.recipe -> contiene 1 file (RecipeListResponseDTO) che gestisce l'output della lista in base alla ricerca by name
8. com.exemple.demo.response.user -> contiene 1 file (LoginUserResponseDTO) che gestisce l'output della login
9. com.exemple.demo.servises -> contiene 2 file (RecipeService e UserService) che gestiscono i servizi legati alle ricette e agli utenti come aggiunta, i 3 output di liste in base all apage in cui ci si trova e la login e registrazione dell'utente

PER AVERE IL PROGETTO SUL PROPRIO COMPUTER
Andare su code e scaricare il file del progetto come zip e metterlo dove meglio si preferisce sul proprio dispositivo.
Unzippare il file e aprire i file ricevuti tramite VisualStudioCode con React per il "frontend" e su Eclips Spring Tool 4 per il "backend"
