select name, uen from schools
union all
select name, uen from transports
where timestamp like '%%';

select * from transports;
select * from transportadmins;

select * from schools;
SELECT * FROM schooladmins;

delete from transportadmins;
delete from transports;

delete from schooladmins;
delete from schools;


SELECT 'School' AS type , name, uen , timestamp FROM schools WHERE status = 'Pending' AND name LIKE '%$searchQuery%' OR status = 'Pending' AND  uen LIKE '%$searchQuery%' OR status = 'Pending' AND type LIKE '%searchQuery%'
              UNION ALL
              SELECT 'Transport' AS type , name, uen, timestamp FROM transports WHERE status = 'Pending' AND name LIKE '%$searchQuery%' OR status = 'Pending' AND uen LIKE '%$searchQuery%' OR status = 'Pending' AND type LIKE '%searchQuery%'
              ORDER BY timestamp asc;