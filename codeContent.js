const codeContent = {
    // Question 1
    "1": {
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Name"/>

    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Age"/>

    <EditText
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Mobile Number"/>

</LinearLayout>`
    },
    // Question 2
    "2": {
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<TableLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:stretchColumns="*">

    <TableRow
        android:background="#000000"
        android:padding="5dp">

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Name"
            android:textColor="#FFFFFF" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Age"
            android:textColor="#FFFFFF" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Gender"
            android:textColor="#FFFFFF" />

        <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Course"
            android:textColor="#FFFFFF" />
    </TableRow>

    <TableRow android:padding="5dp">
        <TextView android:text="John" />
        <TextView android:text="20" />
        <TextView android:text="Male" />
        <TextView android:text="BCA" />
    </TableRow>

    <TableRow android:padding="5dp">
        <TextView android:text="Sarah" />
        <TextView android:text="21" />
        <TextView android:text="Female" />
        <TextView android:text="MCA" />
    </TableRow>

    <TableRow android:padding="5dp">
        <TextView android:text="Mike" />
        <TextView android:text="19" />
        <TextView android:text="Male" />
        <TextView android:text="BSc" />
    </TableRow>

    <TableRow android:padding="5dp">
        <TextView android:text="Emily" />
        <TextView android:text="22" />
        <TextView android:text="Female" />
        <TextView android:text="MSc" />
    </TableRow>

    <TableRow android:padding="5dp">
        <TextView android:text="David" />
        <TextView android:text="20" />
        <TextView android:text="Male" />
        <TextView android:text="BCA" />
    </TableRow>
</TableLayout>`
    },
    // Question 3
    "3": {
        "Java": `import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import androidx.appcompat.app.AppCompatActivity;

public class AutoCompleteDemo extends AppCompatActivity {
    AutoCompleteTextView act;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_auto_complete_demo);
        act=(AutoCompleteTextView) findViewById(R.id.act);
        String [] subjects={"Google", "Yahoo", "Duck Duck Go", "Yandex"};
        ArrayAdapter adpt = new ArrayAdapter(this, android.R.layout.simple_list_item_1, subjects);
        act.setAdapter(adpt);
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:layout_marginTop="100dp"
    tools:context=".AutoCompleteDemo">
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Search"
        android:textSize="25dp"/>
        
    <AutoCompleteTextView
        android:layout_width="300dp"
        android:layout_height="50dp"
        android:id="@+id/act"/>

</LinearLayout>`
    },
    // Question 4
    "4": {
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:layout_marginTop="100dp"
    tools:context=".ToggleDemo">

    <ToggleButton
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_marginLeft="120dp"/>
    
</LinearLayout>`
    },
    // Question 5
    "5": {
        "Java": `import android.os.Bundle;
import android.view.View;
import android.widget.CheckBox;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class CheckBoxDemo extends AppCompatActivity {
    CheckBox cb1,cb2,cb3,cb4,cb5;
    StringBuilder str=new StringBuilder("Selected Flowers: ");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_check_box_demo);
        cb1=findViewById(R.id.cb1);
        cb2=findViewById(R.id.cb2);
        cb3=findViewById(R.id.cb3);
        cb4=findViewById(R.id.cb4);
        cb5=findViewById(R.id.cb5);
    }

    public void orderFlowers(View v){
        if (cb1.isChecked()){
            str.append("Rose\n");
        }
        if (cb2.isChecked()){
            str.append("Lotus\n");
        }
        if (cb3.isChecked()){
            str.append("Sunflower\n");
        }
        if (cb4.isChecked()){
            str.append("Lily\n");
        }
        if (cb5.isChecked()){
            str.append("Tulip\n");
        }
        Toast.makeText(this, str.toString(), Toast.LENGTH_LONG).show();
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    android:orientation="vertical"
    tools:context=".CheckBoxDemo">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Select Flowers: "
        android:textSize="20dp"
        android:textColor="@color/black"/>

    <CheckBox
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Rose"
        android:id="@+id/cb1"/>
    <CheckBox
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Lotus"
        android:id="@+id/cb2"/>
    <CheckBox
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Sunflower"
        android:id="@+id/cb3"/>
    <CheckBox
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Lily"
        android:id="@+id/cb4"/>
    <CheckBox
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Tulip"
        android:id="@+id/cb5"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Order"
        android:onClick="orderFlowers"/>

</LinearLayout>`
    },
    // Question 6
    "6": {
        "Java": `import android.os.Bundle;
import android.view.View;
import android.widget.RadioButton;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class RadioDemo extends AppCompatActivity {
    RadioButton piz, burg, m, fm;
    StringBuilder str = new StringBuilder("Selected Items: ");

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_radio_demo);
        piz=findViewById(R.id.piz);
        burg=findViewById(R.id.burg);
        m=findViewById(R.id.m);
        fm=findViewById(R.id.fm);
    }
    public void showSelected(View v){
        if (piz.isChecked()){
            str.append("Pizza\n");
        }
        if (burg.isChecked()){
            str.append("Burger\n");
        }
        if (m.isChecked()){
            str.append("Male");
        }
        if (fm.isChecked()){
            str.append("Female");
        }
        Toast.makeText(this, str.toString(), Toast.LENGTH_LONG).show();
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:layout_marginTop="100dp"
    tools:context=".RadioDemo">

    <RadioButton
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Pizza"
        android:id="@+id/piz"/>
    <RadioButton
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Burger"
        android:id="@+id/burg"/>

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Select Gender: "
        android:textSize="20dp" />

    <RadioGroup
        android:layout_width="wrap_content"
        android:layout_height="wrap_content">

        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Male"
            android:id="@+id/m"/>
        <RadioButton
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Female"
            android:id="@+id/fm"/>
    </RadioGroup>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Show Selected"
        android:onClick="showSelected"/>

</LinearLayout>`
    },
    // Question 7
    "7": {
        "Java": `import android.os.Bundle;
import android.widget.ProgressBar;
import androidx.appcompat.app.AppCompatActivity;

public class ProgressDemo extends AppCompatActivity {
    ProgressBar pgb;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_progress_demo);
        pgb = findViewById(R.id.pgb);

        for (int i = 1; i <= 100; i++) {
            pgb.setProgress(i);
        }
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    tools:context=".ProgressDemo">
    <ProgressBar
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:layout_alignParentTop="true"
        style="@style/ShapeAppearance.Material3.Corner.Large"
        android:id="@+id/pgb"/>
</RelativeLayout>`
    },
    // Question 8
    "8": {
        "Java": `import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;

public class ListViewToast extends AppCompatActivity {
    String[] subjects = {
            "MAD", "PWP", "NIS", "EDE", "ETI", "CPP"
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_list_view_toast);

        // Initialize ListView
        ListView listView = findViewById(R.id.listView);

        // Create an ArrayAdapter to bind data to the ListView
        ArrayAdapter<String> adapter = new ArrayAdapter<>(
                this,
                android.R.layout.simple_list_item_1,
                subjects
        );

        // Set the adapter to the ListView
        listView.setAdapter(adapter);

        // Set click listener on ListView items
        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String selectedSubject = subjects[position];
                Toast.makeText(ListViewToast.this, "Selected: " + selectedSubject, Toast.LENGTH_SHORT).show();
            }
        });
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".ListViewToast">

    <ListView
        android:id="@+id/listView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"/>

</LinearLayout>`
    },
    // Question 9
    "9": {
        "Java": `import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.GridView;
import androidx.appcompat.app.AppCompatActivity;

public class GridButtonsDemo extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_grid_buttons_demo);

        GridView gridView = findViewById(R.id.gridView);
        gridView.setAdapter(new ButtonAdapter());
    }

    private class ButtonAdapter extends BaseAdapter {
        @Override
        public int getCount() {
            return 15;
        }

        @Override
        public Object getItem(int position) {
            return null;
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            Button button;
            if (convertView == null) {
                button = new Button(GridButtonsDemo.this);
                button.setLayoutParams(new GridView.LayoutParams(200, 200));
                button.setPadding(8, 8, 8, 8);
            } else {
                button = (Button) convertView;
            }
            button.setText("Button " + (position + 1));
            return button;
        }
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    tools:context=".GridButtonsDemo">
    <GridView xmlns:android="http://schemas.android.com/apk/res/android"
        android:id="@+id/gridView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:numColumns="3" />
</LinearLayout>`
    },
    // Question 10
    "10": {
        "Java": `import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class VerticalScrollDemo extends AppCompatActivity {
    TextView tv;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_vertical_scroll_demo);
        tv = findViewById(R.id.tv1);
        tv.setText("Android is an operating system based on a modified version of the Linux kernel and other open-source software, designed primarily for touchscreen-based mobile devices such as smartphones and tablets. Android has historically been developed by a consortium of developers known as the Open Handset Alliance, but its most widely used version is primarily developed by Google. First released in 2008, Android is the world's most widely used operating system; the latest version, released on October 15, 2024, is Android 15.[4]\n" +
                "\n" +
                "At its core, the operating system is known as the Android Open Source Project (AOSP)[5] and is free and open-source software (FOSS) primarily licensed under the Apache License. However, most devices run the proprietary Android version developed by Google, which ships with additional proprietary closed-source software pre-installed,[6] most notably Google Mobile Services (GMS),[7] which includes core apps such as Google Chrome, the digital distribution platform Google Play, and the associated Google Play Services development platform. Firebase Cloud Messaging is used for push notifications. While AOSP is free, the \"Android\" name and logo are trademarks of Google, who restrict the use of Android branding on \"uncertified\" products.[8][9] The majority of smartphones based on AOSP run Google's ecosystem—which is known simply as Android—some with vendor-customized user interfaces and software suites,[10] for example One UI. Numerous modified distributions exist, which include competing Amazon Fire OS, community-developed LineageOS, and others; the source code has also been used to develop a variety of Android distributions on a range of other electronics, such as Android TV for televisions, Wear OS for wearables, and Meta Horizon OS for VR headsets.");
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    tools:context=".VerticalScrollDemo">
    
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/tv1"/>

</LinearLayout>`
    },
    // Question 11
    "11": {
        "Java": `package com.example.prelimprac;

import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import java.util.Calendar;

public class DateTimeSelect extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_date_time_select);

        Button btnSelectDate = findViewById(R.id.btnSelectDate);
        Button btnSelectTime = findViewById(R.id.btnSelectTime);
        TextView tvDateTime = findViewById(R.id.tvDateTime);

        btnSelectDate.setOnClickListener(v -> {
            Calendar calendar = Calendar.getInstance();
            new DatePickerDialog(this, (view, year, month, dayOfMonth) -> {
                String selectedDate = dayOfMonth + "/" + (month + 1) + "/" + year;
                tvDateTime.setText("Selected Date: " + selectedDate);
            }, calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH), calendar.get(Calendar.DAY_OF_MONTH)).show();
        });

        btnSelectTime.setOnClickListener(v -> {
            Calendar calendar = Calendar.getInstance();
            new TimePickerDialog(this, (view, hourOfDay, minute) -> {
                String selectedTime = hourOfDay + ":" + (minute < 10 ? "0" + minute : minute);
                tvDateTime.setText("Selected Time: " + selectedTime);
            }, calendar.get(Calendar.HOUR_OF_DAY), calendar.get(Calendar.MINUTE), true).show();
        });
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    tools:context=".DateTimeSelect">
    <Button
        android:id="@+id/btnSelectDate"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Select Date"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="16dp" />

    <Button
        android:id="@+id/btnSelectTime"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Select Time"
        app:layout_constraintTop_toBottomOf="@id/btnSelectDate"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="16dp" />

    <TextView
        android:id="@+id/tvDateTime"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Selected Date and Time will appear here"
        app:layout_constraintTop_toBottomOf="@id/btnSelectTime"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="16dp" />
</LinearLayout>`
    },
    // Question 12
    "12": {
        "Java": `package com.band.backendpracs;

import android.os.Bundle;
import android.util.Log;
import androidx.appcompat.app.AppCompatActivity;

public class ActivityLifecycle extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lifecycle);
        Log.d("tag", "onCreate() invoked \n Hello World");
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d("tag", "onStart() Invoked");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("tag", "onResume() Invoked");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d("tag", "onPause() Invoked");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d("tag", "onStop() Invoked");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.d("tag", "onDestroy() Invoked");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d("tag", "onRestart() Invoked");
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".ActivityLifecycle">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Activity Lifecycle Demo"
        android:textSize="20sp"
        android:layout_gravity="center"
        android:layout_marginTop="16dp"/>

</LinearLayout>`
    },
    // Question 13
    "13": {
        "Java": `package com.example.prelimprac;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;

public class GoogleNavigate extends AppCompatActivity {
    EditText etUrl;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_google_navigate);
        etUrl = findViewById(R.id.etUrl);
    }
    
    public void navigateSite(View v){
        String url = etUrl.getText().toString().trim();
        if (!url.isEmpty()) {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "http://" + url;
            }
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            startActivity(intent);
        }
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    tools:context=".GoogleNavigate">

    <EditText
        android:id="@+id/etUrl"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Enter URL"
        android:inputType="textUri" />

    <Button
        android:onClick="navigateSite"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Navigate"
        android:layout_marginTop="16dp" />
</LinearLayout>`
    },
    // Question 14
    "14": {
        "Java": `package com.band.backendpracs;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;

public class PhoneDialer extends AppCompatActivity {
    EditText d1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_phone_dialer);
        d1=findViewById(R.id.d1);
    }

    public void openDialer(View v){
        Intent i = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:"+d1.getText().toString()));
        startActivity(i);
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="80dp"
    tools:context=".PhoneDialer">

    <EditText
        android:layout_width="match_parent"
        android:layout_height="80dp"
        android:id="@+id/d1"
        android:hint="Enter Phone Number"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Open Dialer"
        android:onClick="openDialer"
        android:layout_below="@id/d1"
        android:layout_centerInParent="true"/>

</RelativeLayout>`
    },
    // Question 15
    "15": {
        "Java1": `import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;

public class FactorialImplicit extends AppCompatActivity {
    EditText factText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_factorial_implicit);
        factText=findViewById(R.id.fe1);
    }

    public void calcFact(View v){
        Intent i = new Intent(this, FactorialImplicitView.class);
        i.putExtra("key", factText.getText().toString());
        startActivity(i);
    }
}`,
        "Java2": `import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;

public class FactorialImplicitView extends AppCompatActivity {
    TextView vt;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_factorial_implicit_view);
        vt=(findViewById(R.id.vf1));
        Intent iv = getIntent();
        String s = iv.getStringExtra("key");
        int n = Integer.parseInt(s);

        //factorial logic
        int fact=1;
        for (int i=1;i<=n;i++){
            fact=fact*i;
        }

        vt.setText(""+fact);
    }
}`,
        "XML1": `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="80dp"
    tools:context=".FactorialImplicit">

    <EditText
        android:layout_width="match_parent"
        android:layout_height="80dp"
        android:id="@+id/fe1"
        android:hint="Enter Your Number"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Calculate Factorial"
        android:onClick="calcFact"
        android:layout_below="@id/fe1"
        android:layout_centerInParent="true"/>

</RelativeLayout>`,
        "XML2": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="80dp"
    android:orientation="vertical"
    tools:context=".FactorialImplicitView">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Factorial of the number is: "
        android:textSize="15dp"
        android:textColor="@color/black"/>
    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/vf1"/>

</LinearLayout>`
    },
    // Question 16
    "16": {
        "Java": `import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import androidx.appcompat.app.AppCompatActivity;

public class WifiActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wifi);
    }
    public void startWifi(View v){
        Intent i = new Intent(this, MyService.class);
        i.putExtra("start", true);
        startActivity(i);
    }
    public void stopWifi(View v){
        super.onDestroy();
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Start Wifi"
        android:onClick="startWifi"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Stop Wifi"
        android:onClick="stopWifi"/>
</LinearLayout>`
    },
    // Question 17
    "17": {
        "Java": `import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class BCDemo extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        String action = intent.getAction();

        if (Intent.ACTION_BATTERY_LOW.equals(action)) {
            Toast.makeText(context, "Battery Low", Toast.LENGTH_LONG).show();
        }
        if (Intent.ACTION_POWER_CONNECTED.equals(action)) {
            Toast.makeText(context, "Power Connected", Toast.LENGTH_LONG).show();
        }
        if (Intent.ACTION_BATTERY_OKAY.equals(action)) {
            Toast.makeText(context, "Battery Okay", Toast.LENGTH_LONG).show();
        }
        if (Intent.ACTION_AIRPLANE_MODE_CHANGED.equals(action)) {
            Toast.makeText(context, "Airplane Mode Changed", Toast.LENGTH_LONG).show();
        }
        if (Intent.ACTION_POWER_DISCONNECTED.equals(action)) {
            Toast.makeText(context, "Power Disconnected", Toast.LENGTH_LONG).show();
        }
        if (Intent.ACTION_SCREEN_OFF.equals(action)) {
            Toast.makeText(context, "Screen Turned Off", Toast.LENGTH_LONG).show();
        }
        if (Intent.ACTION_SCREEN_ON.equals(action)) {
            Toast.makeText(context, "Screen On", Toast.LENGTH_LONG).show();
        }
    }
}`
    },
    // Question 18
    "18": {
        "Java": `import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.List;

public class SensorListDemo extends AppCompatActivity {
    ListView lvw;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sensor_list_demo);
        lvw=findViewById(R.id.lvw);

        SensorManager smw = (SensorManager) getSystemService(SENSOR_SERVICE);
        List<Sensor> sl = smw.getSensorList(Sensor.TYPE_ALL);

        ArrayList<String> names = new ArrayList<>();
        for (Sensor s:sl){
            names.add(s.getName());
        }
        ArrayAdapter adpt = new ArrayAdapter(this, android.R.layout.simple_list_item_1, names);
        lvw.setAdapter(adpt);
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:layout_marginTop="100dp"
    tools:context=".SensorListDemo">

    <ListView
        android:layout_width="wrap_content"
        android:layout_height="match_parent"
        android:id="@+id/lvw"/>

</LinearLayout>`
    },
    // Question 19
    "19": {
        "Java": `import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.ImageView;
import androidx.appcompat.app.AppCompatActivity;

public class CameraDemo extends AppCompatActivity {
    ImageView img;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera_demo);
        img=findViewById(R.id.img);
    }

    public void clickPhoto(View v){
        Intent i = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(i,1);
    }

    protected void onActivityResult(int reqCode, int resCode, Intent data){
        super.onActivityResult(reqCode, resCode, data);
        if (reqCode==1 && resCode==RESULT_OK){
            Bitmap photo=(Bitmap)data.getExtras().get("data");
            img.setImageBitmap(photo);
        }
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    tools:context=".CameraDemo">

    <ImageView
        android:layout_width="match_parent"
        android:layout_height="400dp"
        android:id="@+id/img"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click"
        android:onClick="clickPhoto"
        android:layout_below="@id/img"
        android:layout_centerInParent="true"/>

</RelativeLayout>`
    },
    // Question 20
    "20": {
        "Java": `import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.widget.VideoView;
import androidx.appcompat.app.AppCompatActivity;

public class CameraDemo extends AppCompatActivity {
    VideoView vdo;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_camera_demo);
        vdo = findViewById(R.id.vdo);
    }

    public void clickVideo(View v) {
        Intent i = new Intent(MediaStore.ACTION_VIDEO_CAPTURE);
        startActivityForResult(i, 1);
    }

    @Override
    protected void onActivityResult(int reqCode, int resCode, Intent data) {
        super.onActivityResult(reqCode, resCode, data);

        if (reqCode == 1 && resCode == RESULT_OK && data != null) {
            Uri videoUri = data.getData();
            vdo.setVideoURI(videoUri);
            vdo.start();
        }
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:layout_marginTop="100dp"
    tools:context=".CameraDemo">

    <VideoView
        android:layout_width="match_parent"
        android:layout_height="400dp"
        android:id="@+id/vdo"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Click"
        android:onClick="clickVideo"
        android:layout_below="@id/vdo"
        android:layout_centerInParent="true"/>

</RelativeLayout>`
    },
    // Question 21
    "21": {
        "Java": `import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import androidx.appcompat.app.AppCompatActivity;
import java.util.ArrayList;
import java.util.Set;

public class BluetoothDemo extends AppCompatActivity {
    ListView list;
    BluetoothAdapter adpt;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_bluetooth_demo);
        list=findViewById(R.id.myList);
        adpt= BluetoothAdapter.getDefaultAdapter();
    }

    public void on(View view)
    {
        if(adpt!=null && !adpt.isEnabled())
        {
            Intent obj=new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            startActivity(obj);
        }
    }

    public void oA(View view) {
        if (adpt != null && adpt.isEnabled()) {
            adpt.disable();
        }
    }

    public void scan(View view) {
        if (adpt != null && adpt.isEnabled()) {
            adpt.startDiscovery();
        }
    }

    public void listOfDevices(View view) {
        if (adpt != null && adpt.isEnabled()) {
            Set<BluetoothDevice> pairedDevices = adpt.getBondedDevices();
            ArrayList<String> devices = new ArrayList<>();
            for (BluetoothDevice device : pairedDevices) {
                devices.add(device.getName() + "\\n" + device.getAddress());
            }
            ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, devices);
            list.setAdapter(adapter);
        }
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="on"
        android:onClick="on"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="oA"
        android:onClick="oA"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Scan"
        android:onClick="scan"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Paired Devices"
        android:onClick="listOfDevices"/>
    <ListView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/myList"/>
</LinearLayout>`
    },
    // Question 22
    "22": {
        "Java": `import android.os.Bundle;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.ImageView;
import androidx.appcompat.app.AppCompatActivity;

public class AnimationDemo extends AppCompatActivity
{
    ImageView Cartoon;
    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_animation_demo);
        Cartoon=findViewById(R.id.img);
    }

    public void zIn(View view)
    {
        Animation zin= AnimationUtils.loadAnimation(this,R.anim.zoomin);
        Cartoon.startAnimation(zin);
    }

    public void zOut(View view)
    {
        Animation zout= AnimationUtils.loadAnimation(this,R.anim.zoomout);
        Cartoon.startAnimation(zout);
    }

    public void clock(View view)
    {
        Animation obj=AnimationUtils.loadAnimation(this,R.anim.clock);
        Cartoon.startAnimation(obj);
    }

    public void fade(View view)
    {
        Animation obj=AnimationUtils.loadAnimation(this,R.anim.fade);
        Cartoon.startAnimation(obj);
    }

    public void blink(View view)
    {
        Animation obj=AnimationUtils.loadAnimation(this,R.anim.blink);
        Cartoon.startAnimation(obj);
    }

    public void move(View view)
    {
        Animation obj=AnimationUtils.loadAnimation(this,R.anim.move);
        Cartoon.startAnimation(obj);
    }

    public void slide(View view)
    {
        Animation obj=AnimationUtils.loadAnimation(this,R.anim.slide);
        Cartoon.startAnimation(obj);
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".AnimationDemo">

    <ImageView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/img"
        android:src="@drawable/img"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Zoom In"
        android:onClick="zIn"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Zoom Out"
        android:onClick="zOut"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="ClockWise"
        android:onClick="clock"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Fade"
        android:onClick="fade"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Blink"
        android:onClick="blink"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Move"
        android:onClick="move"/>

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Slide"
        android:onClick="slide"/>
</LinearLayout>`
    },
    // Question 23
    "23": {
        "Java": `import android.database.Cursor;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

public class DatabaseDemo extends AppCompatActivity {
    EditText rno, sname;
    DBHelper Db;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_database_demo);
        rno = findViewById(R.id.rno);
        sname=findViewById(R.id.sname);
        Db=new DBHelper(this);
    }

    public void insertData(View v){
        String roll = rno.getText().toString();
        String name = sname.getText().toString();
        Db.insertStudentData(roll, name);
        Toast.makeText(getApplicationContext(), "Data Inserted Successfully", Toast.LENGTH_LONG).show();
    }

    public void updateData(View v){
        String roll = rno.getText().toString();
        String name = sname.getText().toString();
        Db.updateStudentData(roll, name);
        Toast.makeText(getApplicationContext(), "Data Updated Successfully", Toast.LENGTH_LONG).show();
    }

    public void deleteData(View v){
        String roll = rno.getText().toString();
        Db.deleteStudentData(roll);
        Toast.makeText(getApplicationContext(), "Data Deleted Successfully", Toast.LENGTH_LONG).show();
    }

    public void viewData(View v){
        Cursor res = Db.getStudentData();
        if(res.getCount()==0){
            Toast.makeText(getApplicationContext(), "No Data Found", Toast.LENGTH_LONG).show();
            return;
        }
        StringBuffer buffer = new StringBuffer();
        while(res.moveToNext()){
            buffer.append("Roll No: "+res.getString(0)+"\\n");
            buffer.append("Name: "+res.getString(1)+"\\n\\n");
        }
        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setCancelable(true);
        builder.setTitle("Student Data");
        builder.setMessage(buffer.toString());
        builder.show();
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:layout_marginTop="100dp"
    tools:context=".DatabaseDemo">
    
    <EditText
        android:layout_width="match_parent"
        android:layout_height="60dp"
        android:hint="Enter Roll Number"
        android:layout_marginBottom="10dp"
        android:id="@+id/rno"/>
    
    <EditText
        android:layout_width="match_parent"
        android:layout_height="60dp"
        android:hint="Enter Student Name"
        android:layout_marginBottom="10dp"
        android:id="@+id/sname"/>

    <Button
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Insert"
        android:layout_marginBottom="10dp"
        android:onClick="insertData"/>
    <Button
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Update"
        android:layout_marginBottom="10dp"
        android:onClick="updateData"/>
    <Button
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Delete"
        android:layout_marginBottom="10dp"
        android:onClick="deleteData"/>
    <Button
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="View"
        android:onClick="viewData"/>
</LinearLayout>`
    },
    // Question 24
    "24": {
        "Java": `import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import android.Manifest;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.telephony.SmsManager;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity
{
    EditText e1,e2;
    Button b1;
    SmsReceiver sms=new SmsReceiver();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1 = (EditText) findViewById(R.id.e1);
        e2 = (EditText) findViewById(R.id.e2);
        b1 = (Button) findViewById(R.id.b1);

        if (ContextCompat.checkSelfPermission(MainActivity.this, Manifest.permission.SEND_SMS) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(MainActivity.this, new String[]{Manifest.permission.SEND_SMS}, 100);
        }

        b1.setOnClickListener(new View.OnClickListener() {
            public void onClick(View view) {
                try {
                    String phno = e1.getText().toString();
                    String msg = e2.getText().toString();
                    SmsManager smsManager = SmsManager.getDefault();
                    smsManager.sendTextMessage(phno, null, msg, null, null);
                    Toast.makeText(getApplicationContext(), "Message Sent", Toast.LENGTH_LONG).show();
                } catch (Exception e) {
                    Toast.makeText(getApplicationContext(), "Some fields are Empty", Toast.LENGTH_LONG).show();
                }
            }
        });
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_marginTop="100dp"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <EditText
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/e1"
        android:hint="enter phone number"/>

    <EditText
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/e2"
        android:hint="enter the message"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:id="@+id/b1"
        android:text="click to send message"/>
</LinearLayout>`
    },
    // Question 25
    "25": {
        "Java": `import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;

public class EmailDemo extends AppCompatActivity {
    EditText et1, et2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_email_demo);
        et1= findViewById(R.id.et1);
        et2=findViewById(R.id.et2);
    }

    public void sendMail(View v){
        Intent i = new Intent(Intent.ACTION_SENDTO);
        i.setData(Uri.parse("mailto:"));
        i.putExtra(Intent.EXTRA_EMAIL, new String[]{et1.getText().toString()});
        i.putExtra(Intent.EXTRA_TEXT, et2.getText().toString());
        startActivity(i);
    }
}`,
        "XML": `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_marginTop="100dp"
    android:orientation="vertical"
    android:layout_height="match_parent"
    tools:context=".EmailDemo">

    <EditText
        android:layout_width="300dp"
        android:layout_height="50dp"
        android:hint="TO:"
        android:id="@+id/et1"/>

    <EditText
        android:layout_width="300dp"
        android:layout_height="200dp"
        android:hint="Message:"
        android:id="@+id/et2"/>
    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Send Mail"
        android:onClick="sendMail"/>

</LinearLayout>`
    }
};

// Let's read each file and add its content 