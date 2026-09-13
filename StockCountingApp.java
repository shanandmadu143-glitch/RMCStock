import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;

public class StockCountingApp extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Stock Counting | Professional Dashboard");

        // Main Container
        VBox root = new VBox(15);
        root.setPadding(new Insets(20));
        root.getStyleClass().add("root-container");

        // Header Block
        HBox header = new HBox();
        header.getStyleClass().add("header-block");
        header.setAlignment(Pos.CENTER_LEFT);
        
        Label brandTitle = new Label("Stock Counting");
        brandTitle.getStyleClass().add("brand-title");
        
        Region spacer = new Region();
        HBox.setHgrow(spacer, Priority.ALWAYS);
        
        Button btnSettings = new Button("⚙️ Settings");
        btnSettings.getStyleClass().add("btn-icon-header");
        
        header.getChildren().addAll(brandTitle, spacer, btnSettings);

        // Card Container (Form)
        VBox card = new VBox(12);
        card.getStyleClass().add("card");

        // Search Group
        VBox searchGroup = new VBox(5);
        Label lblSearch = new Label("🔍 Name or Codes:");
        TextField searchInput = new TextField();
        searchInput.setPromptText("Type Code or Name to filter...");
        searchGroup.getChildren().addAll(lblSearch, searchInput);

        // Form Grid (Section & Amount)
        GridPane formGrid = new GridPane();
        formGrid.setHgap(10);
        formGrid.setVgap(5);

        VBox sectionBox = new VBox(5);
        Label lblSection = new Label("📁 Select Section:");
        ComboBox<String> sectionSelect = new ComboBox<>();
        sectionSelect.getItems().addAll("Receipt (F)", "Issues (G)", "Return (H)", "Received to SSL (I)", "Sent to SSL (J)", "Rejection (L)");
        sectionSelect.getSelectionModel().selectFirst();
        sectionSelect.setMaxWidth(Double.MAX_VALUE);
        sectionBox.getChildren().addAll(lblSection, sectionSelect);

        VBox amountBox = new VBox(5);
        Label lblAmount = new Label("🔢 Enter Amount:");
        TextField inputAmount = new TextField();
        inputAmount.setPromptText("0.00");
        amountBox.getChildren().addAll(lblAmount, inputAmount);

        formGrid.add(sectionBox, 0, 0);
        formGrid.add(amountBox, 1, 0);
        GridPane.setHgrow(sectionBox, Priority.ALWAYS);
        GridPane.setHgrow(amountBox, Priority.ALWAYS);

        // Buttons Row
        HBox btnRow = new HBox(10);
        Button btnSave = new Button("💾 Save");
        btnSave.getStyleClass().add("btn-primary");
        
        Button btnExcel = new Button("📊");
        btnExcel.getStyleClass().add("btn-icon-excel");
        
        Button btnShare = new Button("📤");
        btnShare.getStyleClass().add("btn-icon-share");
        
        btnRow.getChildren().addAll(btnSave, btnExcel, btnShare);

        card.getChildren().addAll(searchGroup, formGrid, btnRow);

        // Footer Note
        Label footer = new Label("Created By Yomal Lakshan");
        footer.getStyleClass().add("footer-note");
        footer.setAlignment(Pos.CENTER);

        root.getChildren().addAll(header, card, footer);

        // Scene setup
        Scene scene = new Scene(root, 450, 500);
        // CSS ගොනුව සම්බන්ධ කිරීම (style.css එක ළඟම තිබිය යුතුය)
        scene.getStylesheets().add(getClass().getResource("style.css").toExternalForm());

        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
